class NftsController < ApplicationController
  before_action :set_nft, only: [:show, :update, :destroy, :add_comment]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /nfts
  def index
    @nfts = Nft.all

    render json: @nfts
  end

  # GET /nfts/1
  def show
    render json: @nft, include: :comments
  end

  # POST /nfts
  def create
    @nft = Nft.new(nft_params)
    @nft.user = @current_user

    if @nft.save
      render json: @nft, status: :created
    else
      render json: @nft.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /nfts/1
  def update
    if @nft.update(nft_params)
      render json: @nft
    else
      render json: @nft.errors, status: :unprocessable_entity
    end
  end

  # DELETE /nfts/1
  def destroy
    @nft.destroy
  end

  # PUT /nfts/1/comments/1
  def add_comment
    @comment = Comment.find(params(:comment_id))
    # @nft = Nft.find(params(:id))

    @nft.comments.push(@comment)
    render json: @nft, include: :comments
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_nft
      @nft = Nft.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def nft_params
      params.require(:nft).permit(:image_link, :title, :created_date, :collection_type, :mint_num, :total_minted, :lowest_ask, :top_sale, :about_seller, :description, :num_for_sale, :not_for_sale, :user_id_id)
    end
end
