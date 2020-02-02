# frozen_string_literal: true

module Api
  module V1
    class PostsController < ApplicationController
      def index
        @posts = Post.page(page).per(per)
      end

      def show
        @post = Post.find_by(post_id: params[:id])
      end

      private

      def page
        params[:page] || 1
      end

      def per
        params[:per] || 32
      end
    end
  end
end
