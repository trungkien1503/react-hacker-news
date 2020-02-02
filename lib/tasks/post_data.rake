# frozen_string_literal: true

namespace :post_data do
  desc 'Fetch posts data from hacker news'

  task crawl: :environment do
    puts 'Start'
    PostService.new.crawl_data
    puts 'Finish!'
  end
end
