# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_09_193516) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brackets", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "game_1_winner"
    t.integer "game_2_winner"
    t.integer "game_3_winner"
    t.integer "game_4_winner"
    t.integer "game_5_winner"
    t.integer "game_6_winner"
    t.integer "game_7_winner"
    t.integer "game_8_winner"
    t.integer "game_9_winner"
    t.integer "game_10_winner"
    t.integer "game_11_winner"
    t.integer "game_12_winner"
    t.integer "game_13_winner"
    t.integer "game_14_winner"
    t.integer "game_15_winner"
    t.integer "game_16_winner"
    t.integer "game_17_winner"
    t.integer "game_18_winner"
    t.integer "game_19_winner"
    t.integer "game_20_winner"
    t.integer "game_21_winner"
    t.integer "game_22_winner"
    t.integer "game_23_winner"
    t.integer "game_24_winner"
    t.integer "game_25_winner"
    t.integer "game_26_winner"
    t.integer "game_27_winner"
    t.integer "game_28_winner"
    t.integer "game_29_winner"
    t.integer "game_30_winner"
    t.integer "game_31_winner"
    t.integer "game_32_winner"
    t.integer "game_33_winner"
    t.integer "game_34_winner"
    t.integer "game_35_winner"
    t.integer "game_36_winner"
    t.integer "game_37_winner"
    t.integer "game_38_winner"
    t.integer "game_39_winner"
    t.integer "game_40_winner"
    t.integer "game_41_winner"
    t.integer "game_42_winner"
    t.integer "game_43_winner"
    t.integer "game_44_winner"
    t.integer "game_45_winner"
    t.integer "game_46_winner"
    t.integer "game_47_winner"
    t.integer "game_48_winner"
    t.integer "game_49_winner"
    t.integer "game_50_winner"
    t.integer "game_51_winner"
    t.integer "game_52_winner"
    t.integer "game_53_winner"
    t.integer "game_54_winner"
    t.integer "game_55_winner"
    t.integer "game_56_winner"
    t.integer "game_57_winner"
    t.integer "game_58_winner"
    t.integer "game_59_winner"
    t.integer "game_60_winner"
    t.integer "game_61_winner"
    t.integer "game_62_winner"
    t.integer "game_63_winner"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_brackets_on_user_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "team_1"
    t.string "team_2"
    t.string "team_3"
    t.string "team_4"
    t.string "team_5"
    t.string "team_6"
    t.string "team_7"
    t.string "team_8"
    t.string "team_9"
    t.string "team_10"
    t.string "team_11"
    t.string "team_12"
    t.string "team_13"
    t.string "team_14"
    t.string "team_15"
    t.string "team_16"
    t.string "team_17"
    t.string "team_18"
    t.string "team_19"
    t.string "team_20"
    t.string "team_21"
    t.string "team_22"
    t.string "team_23"
    t.string "team_24"
    t.string "team_25"
    t.string "team_26"
    t.string "team_27"
    t.string "team_28"
    t.string "team_29"
    t.string "team_30"
    t.string "team_31"
    t.string "team_32"
    t.string "team_33"
    t.string "team_34"
    t.string "team_35"
    t.string "team_36"
    t.string "team_37"
    t.string "team_38"
    t.string "team_39"
    t.string "team_40"
    t.string "team_41"
    t.string "team_42"
    t.string "team_43"
    t.string "team_44"
    t.string "team_45"
    t.string "team_46"
    t.string "team_47"
    t.string "team_48"
    t.string "team_49"
    t.string "team_50"
    t.string "team_51"
    t.string "team_52"
    t.string "team_53"
    t.string "team_54"
    t.string "team_55"
    t.string "team_56"
    t.string "team_57"
    t.string "team_58"
    t.string "team_59"
    t.string "team_60"
    t.string "team_61"
    t.string "team_62"
    t.string "team_63"
    t.string "team_64"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
