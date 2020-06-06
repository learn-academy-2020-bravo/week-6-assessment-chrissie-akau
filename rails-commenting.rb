# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) This is a controller file we created for the model called Blog Posts. This will handle all the methods/logic we want to use and coordinates the interaction between the user, views, and model.
class BlogPostsController < ApplicationController
  def index
    # 2) This is an instance variable called @posts that will show us all the blog posts avaiable in the Blog Posts table.  It will be retrieved using a GET HTTP Verb, and in the url be called by /blogposts.  Part of the READ portion in CRUD.
    @posts = BlogPost.all
  end

  def show
    # 3) This instance variable is going to use the GET HTTP verb,  and asking to show the particular Blog Post by using it's unique id.  You would retrieve this by putting /blogposts/id# in the url in order to view it. Part of the READ portion in CRUD.
    @post = BlogPost.find(params[:id])
  end

  # 4) This is a method that is a midway point between CREATE and READ in CRUD and is the Rails convention for the route that displays a form to the user.  Uses the GET HTTP verb.
  def new
  end

  def create
    # 5)This instance varaible is used to create a new blog post using the strong params method called blog_post_params. This is the CREATE part in the CRUD. It's saying to create the new blog post if it has a title and content, but if the user doesn't do it correctly, to send them back to the form to fill it out again with the correct parameters.  Will use the POST HTTP verb.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.delete
      redirect_to blog_posts_path
    else
      # 6)This will redirect the browser back to the post using the blog posts' unique id if it isn't deleted properly.
      redirect_to blog_post_path(@post)
    end
  end

  # 7)This indicates strong params for Blog Post.  It helps add a level of security to the information being provided by ensuring we only get the information we absoultely want into the Blog Post table.
  private
  def blog_post_params
    # 8)Any blog post entry MUST HAVE a title and content and will be the only content that will be saved into the Blog Post table.
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)This is the Blog Post Application record, this is where we would add any relationships to other tables in it and any validations we might have for Blog Posts.
class BlogPost < ApplicationRecord
  # 10)This establishes that there is a relationship between a table named Comments and Blog Post.  Basically comments can inherit from Blog Post because Comments belongs_to Blog Post, while Blog Post has_man comments.  The foreign key solidfying this relationship would be stored in the Comments table as blog_post_id: integer.
  has_many :comments
end
