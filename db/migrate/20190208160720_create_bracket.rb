class CreateBracket < ActiveRecord::Migration[5.2]
  def change
    create_table :brackets do |t|
      t.belongs_to :user, null: false
      t.integer :game_1_winner
      t.integer :game_2_winner
      t.integer :game_3_winner
      t.integer :game_4_winner
      t.integer :game_5_winner
      t.integer :game_6_winner
      t.integer :game_7_winner
      t.integer :game_8_winner
      t.integer :game_9_winner
      t.integer :game_10_winner
      t.integer :game_11_winner
      t.integer :game_12_winner
      t.integer :game_13_winner
      t.integer :game_14_winner
      t.integer :game_15_winner
      t.integer :game_16_winner
      t.integer :game_17_winner
      t.integer :game_18_winner
      t.integer :game_19_winner
      t.integer :game_20_winner
      t.integer :game_21_winner
      t.integer :game_22_winner
      t.integer :game_23_winner
      t.integer :game_24_winner
      t.integer :game_25_winner
      t.integer :game_26_winner
      t.integer :game_27_winner
      t.integer :game_28_winner
      t.integer :game_29_winner
      t.integer :game_30_winner
      t.integer :game_31_winner
      t.integer :game_32_winner
      t.integer :game_33_winner
      t.integer :game_34_winner
      t.integer :game_35_winner
      t.integer :game_36_winner
      t.integer :game_37_winner
      t.integer :game_38_winner
      t.integer :game_39_winner
      t.integer :game_40_winner
      t.integer :game_41_winner
      t.integer :game_42_winner
      t.integer :game_43_winner
      t.integer :game_44_winner
      t.integer :game_45_winner
      t.integer :game_46_winner
      t.integer :game_47_winner
      t.integer :game_48_winner
      t.integer :game_49_winner
      t.integer :game_50_winner
      t.integer :game_51_winner
      t.integer :game_52_winner
      t.integer :game_53_winner
      t.integer :game_54_winner
      t.integer :game_55_winner
      t.integer :game_56_winner
      t.integer :game_57_winner
      t.integer :game_58_winner
      t.integer :game_59_winner
      t.integer :game_60_winner
      t.integer :game_61_winner
      t.integer :game_62_winner
      t.integer :game_63_winner

      t.timestamps
    end
  end
end
