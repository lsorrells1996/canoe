class LocationsController < ApplicationController
    require 'uri'
    require 'net/http'
    require 'openssl'

    def fetch_data
        city = params[:city]
        country_code = params[:country_code]

        url = URI("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=#{country_code}&minPopulation=200000&namePrefix=#{city}")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        request = Net::HTTP::Get.new(url)
        request["X-RapidAPI-Host"] = 'wft-geo-db.p.rapidapi.com'
        request["X-RapidAPI-Key"] = GEODB_API_KEY

        response = http.request(request)

        render json: response.read_body, status: :ok
    end

end
