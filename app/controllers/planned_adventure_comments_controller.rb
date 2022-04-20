class PlannedAdventureCommentsController < ApplicationController
    def create
        render json: PlannedAdventureComment.create!(comment_params), status: :created
    end

    def index
        render json: PlannedAdventureComment.where(params[:planned_adventure_id]), status: :ok
    end

    private

    def comment_params
        params.permit(:planned_adventure_id, :notes)
    end
end
