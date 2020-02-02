# frozen_string_literal: true

require 'rubygems'
require 'readability'
require 'open-uri'

class Post < ApplicationRecord
  include ActionView::Helpers::DateHelper

  def crawl_data
    json_content = URI.parse("https://hacker-news.firebaseio.com/v0/item/#{post_id}.json").read
    story_data = JSON.parse(json_content)
    domain ||= get_domain(story_data['url'])
    get_content_data(story_data['url'], domain)
    time_ago = time_ago_in_words(Time.zone.at(story_data['time']))
    JSON.pretty_generate(story_data.merge(
                           domain: domain,
                           cover_image_url: cover_image_url,
                           time_ago: time_ago,
                           content: content
                         ))
  end

  private

  def get_content_data(url, domain)
    return if url.blank?
    return if cover_image_url.present? || content.present?

    source = begin
               URI.parse(url).read
             rescue StandardError
               return
             end
    page = Nokogiri::HTML.parse(source)

    update(cover_image_url: get_cover_image(page), domain: domain, content: get_content(source))
    cover_image_url
  end

  def get_domain(url)
    URI.parse(url).host
  rescue StandardError
    nil
  end

  def get_cover_image(page)
    cover_image_url = (page.css("meta[property='og:image']").first || {})['content']
    cover_image_url || ActionController::Base.helpers.asset_url('default.png')
  end

  def get_content(source)
    Readability::Document.new(source, tags: list_of_tags, attributes: %w[src href]).content
  end

  def list_of_tags
    %w[a abbr acronym b big blockquote br cite code
       del dfn em i ins kbd mark pre q s samp
       small span strike strong sub sup time tt u
       var p div a h2 h3 h4 h5 h6 img ol ul
       li]
  end
end
