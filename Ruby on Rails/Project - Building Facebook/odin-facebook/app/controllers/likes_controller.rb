class LikesController < ApplicationController
    def like_post
        post = Post.find(params[:id])
        if Like.where(like: false, user_id: current_user.id, post_id: post.id).any?
            like = Like.where(like: false, user_id: current_user.id, post_id: post.id)
            like.update(like: true)
            redirect_to root_path
        else
            like = Like.new(like: true, user_id: current_user.id, post_id: post.id)
            respond_to do |format|
                if like.save
                    format.html { redirect_to root_path }
                else
                    format.html { render :index, status: :unprocessable_entity }
                end
            end
        end
    end

    def dislike_post
        post = Post.find(params[:id])
        like = Like.where(user_id: current_user.id, post_id: post.id)
        like.update(like: false)
        redirect_to root_path
    end
end
