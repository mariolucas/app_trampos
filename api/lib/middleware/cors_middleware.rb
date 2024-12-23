class CorsMiddleware
    def initialize(app)
      @app = app
    end
  
    def call(env)
      if env['REQUEST_METHOD'] == 'OPTIONS'
        [
          200, # Responde com status 200 para OPTIONS
          cors_headers,
          []
        ]
      else
        status, headers, response = @app.call(env)
        [status, headers.merge(cors_headers), response]
      end
    end
  
    private
  
    def cors_headers
      {
        'Access-Control-Allow-Origin' => '*', # Permite qualquer origem
        'Access-Control-Allow-Methods' => 'GET, POST, PUT, PATCH, DELETE, OPTIONS', # Inclui PUT
        'Access-Control-Allow-Headers' => 'Origin, Content-Type, Accept, Authorization', # Cabeçalhos aceitos
        'Access-Control-Max-Age' => '1728000' # Cache para preflight
      }
    end
  end
  