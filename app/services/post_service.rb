# frozen_string_literal: true

require 'rubygems'
require 'readability'
require 'open-uri'

class PostService
  include ActionView::Helpers::DateHelper

  def crawl_data
    list_post_ids = URI.parse('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy="$key"').read
    list_post_ids = JSON.parse(list_post_ids)
    list_post_ids.each_with_index do |post_id, index|
      story_data = fetch_data(post_id)
      next unless story_data
      handle_single_post(story_data, post_id, index + 1)
    end
  end

  private

  def fetch_data(post_id)
    begin
      json_content = URI.parse("https://hacker-news.firebaseio.com/v0/item/#{post_id}.json").read
      JSON.parse(json_content)
    rescue StandardError
      Rails.logger.error "Error fetching with post_id: #{post_id}"
      nil
    end
  end

  def handle_single_post(story_data, post_id, priority)
    post = Post.find_or_create_by(post_id: post_id)
    domain = get_domain(story_data['url'])
    time_ago = time_ago_in_words(Time.zone.at(story_data['time']))
    post_params = story_data.slice('descendants', 'by', 'score', 'title')
    if post.content.blank?
      cover_image_url, content = get_content_data(story_data['url'])
      post_params.merge!('cover_image_url' => cover_image_url, 'content' => content)
    end
    post_params.merge!('domain' => domain, 'time_ago' => time_ago, priority: priority)
    post.update(post_params)
  end

  def get_content_data(url)
    return if url.blank?

    source = begin
               URI.parse(url).read
             rescue StandardError
               return
             end
    page = Nokogiri::HTML.parse(source)

    [get_cover_image(page), get_content(source)]
  end

  def get_domain(url)
    URI.parse(url).host
  rescue StandardError
    nil
  end

  def get_cover_image(page)
    (page.css("meta[property='og:image']").first || {})['content']
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
