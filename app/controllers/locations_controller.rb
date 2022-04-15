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

    def fetch_wiki_data
        wikiId = params[:wiki_data_id]

        city = Wikidata::Item.find_by_id("#{wikiId}")
      
        render json: city.image.resolved, status: :ok
    end

end
  # wikiId = params[:wiki_data_id]
        # queryable = RDF::Repository.load("https://query.wikidata.org/sparql")
        # solutions = SPARQL.execute("
        # SELECT ?image 
        # WHERE 
        # {
        #   wd:#{wikiId} wdt:P2716 ?image
                    
        # SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE]". }
        # } ", queryable)
        # render json: solutions.to_json, status: :ok