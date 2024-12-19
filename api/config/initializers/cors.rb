# config/initializers/cors.rb
if defined?(Rack::Cors)
    Rails.application.config.middleware.use Rack::Cors do
      allow do
        origins 'http://localhost:4200'  # Ou qualquer origem permitida
        resource '*', :headers => :any, :methods => [:get, :post, :put, :delete, :options]
      end
    end
  end
  