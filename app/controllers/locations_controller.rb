class LocationsController < ApplicationController
    require 'rest-client'
    require 'JSON'

    def fetch_data
        city_data = params[:city]

        URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=500000&namePrefix=#{city_data}"

        parsed_body = JSON.parse( RestClient.get( URL ) )

        render json: parsed_body, status: :ok
    end

end
