# encoding: utf-8
class PostsController < ApplicationController

  before_filter :set_cors_headers, only: [:index, :show, :create, :update, :destroy, :options]
  
  # Exibe todos os posts
  def index
    @posts = Post.all
    render json: { posts: posts_format(@posts) }
  end

  def show
    @posts = Post.find(params[:id])
    if @posts
      render json:  { post: post_format(@posts) }
    else
      render json: { error: "Post not found" }, status: :not_found
    end
  end

  def create
    body = JSON.parse(request.body.read) rescue nil
    @post = Post.new(body['post'])
    
    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    body = JSON.parse(request.body.read) rescue nil

    filtered_attributes = body['post'].slice(*Post.column_names.map(&:to_sym)) 

    @post = Post.find(params[:id])
    if @post.update_attributes(body['post']) 
      render json: @post, status: :ok
    else
      render :edit
    end
  end

  # Exclui um post
  def destroy
    @post = Post.find(params[:id])
    logger.debug "Post ID recebido para exclusão: #{params[:id]}"
    @post.destroy
    head :no_content
  end

  def options
    set_cors_headers
    head :ok
  end

  private

  def posts_format(posts)
    posts.map { |post| post_format(post) }
  end

  def post_format(post)
    {
      id: post.id,
      title: post.title,
      content: post.content,
      created_at: post.created_at,
      updated_at: post.updated_at,
      published_at: post.published_at
    }
  end

  def set_cors_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    headers['Access-Control-Max-Age'] = '1728000'
  end

  def post_params
    {
      title: params[:post][:title],
      content: params[:post][:content]
    }
  end

end
