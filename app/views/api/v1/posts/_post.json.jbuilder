# frozen_string_literal: true

json.id post.post_id
json.extract! post, :title, :domain, :by, :score, :time_ago, :cover_image_url, :content, :descendants
