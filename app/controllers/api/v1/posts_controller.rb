# frozen_string_literal: true

module Api
  module V1
    class PostsController < ApplicationController
      def index
        render json: Post.all
      end

      def show
        post = Post.find_or_create_by(post_id: params[:id])
        render json: post.crawl_data
      end
    end
  end
end
