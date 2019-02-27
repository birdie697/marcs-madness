class Api::V1::BracketsController < ApplicationController

  def index
    user = User.find(params[:user_id])
    render json: user.brackets.order(created_at: :asc)
  end



  def create

    bracket = Bracket.new(bracket_params)

    if bracket.save
      render json: {
        title: "SUCCESS!",
        text: "Your bracket has been saved",
        type: "success"
      }
    else
      render json: {
        title: "DAMN IT!",
        text: bracket.errors.full_message.join(", "),
        type: "error"
      }
    end

  end

  def destroy

    bracket = Bracket.find(params[:id])

    bracket.destroy

    render json: {
      bracket_id: bracket.id,
      title: "SUCCESS!",
      text: "Your bracket has been deleted",
      type: "success"
    }

  end

  private

    def bracket_params
      params.require(:bracket).permit(
        :user_id,
        :name,
        :game_1_winner,  :game_2_winner,  :game_3_winner,  :game_4_winner,
        :game_5_winner,  :game_6_winner,  :game_7_winner,  :game_8_winner,
        :game_9_winner,  :game_10_winner, :game_11_winner, :game_12_winner,
        :game_13_winner, :game_14_winner, :game_15_winner, :game_16_winner,
        :game_17_winner, :game_18_winner, :game_19_winner, :game_20_winner,
        :game_21_winner, :game_22_winner, :game_23_winner, :game_24_winner,
        :game_25_winner, :game_26_winner, :game_27_winner, :game_28_winner,
        :game_29_winner, :game_30_winner, :game_31_winner, :game_32_winner,
        :game_33_winner, :game_34_winner, :game_35_winner, :game_36_winner,
        :game_37_winner, :game_38_winner, :game_39_winner, :game_40_winner,
        :game_41_winner, :game_42_winner, :game_43_winner, :game_44_winner,
        :game_45_winner, :game_46_winner, :game_47_winner, :game_48_winner,
        :game_49_winner, :game_50_winner, :game_51_winner, :game_52_winner,
        :game_53_winner, :game_54_winner, :game_55_winner, :game_56_winner,
        :game_57_winner, :game_58_winner, :game_59_winner, :game_60_winner,
        :game_61_winner, :game_62_winner, :game_63_winner
      )
    end

end
