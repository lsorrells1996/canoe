class AdventureCommentsController < ApplicationController
    def create
        render json: AdventureComment.create!(comment_params), status: :created
    end

    def index
        render json: AdventureComment.where(params[:adventure_id]), status: :ok
    end

    private

    def comment_params
        params.permit(:adventure_id, :notes)
    end
end
