# frozen_string_literal: true

module Api
  module V1
    class PostsController < ApplicationController
      def index
        render json: Post.all
      end

      def show
        render json: Post.find(params[:id])
      end
    end
  end
end
