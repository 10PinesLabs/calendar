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

ActiveRecord::Schema.define(version: 20171007235651) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "metadata", force: :cascade do |t|
    t.string   "description"
    t.string   "icon"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "metadata_reservations", force: :cascade do |t|
    t.integer  "metadata_id"
    t.integer  "reservation_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["metadata_id"], name: "index_metadata_reservations_on_metadata_id", using: :btree
    t.index ["reservation_id"], name: "index_metadata_reservations_on_reservation_id", using: :btree
  end

  create_table "reservations", force: :cascade do |t|
    t.string   "description"
    t.integer  "room_id"
    t.datetime "from"
    t.datetime "to"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["room_id"], name: "index_reservations_on_room_id", using: :btree
    t.index ["user_id"], name: "index_reservations_on_user_id", using: :btree
  end

  create_table "rooms", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.text     "description"
  end

  create_table "users", force: :cascade do |t|
    t.string   "provider"
    t.string   "uid"
    t.string   "oauth_token"
    t.datetime "oauth_expires_at"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "avatar"
  end

  add_foreign_key "metadata_reservations", "metadata", column: "metadata_id"
  add_foreign_key "metadata_reservations", "reservations"
  add_foreign_key "reservations", "rooms"
  add_foreign_key "reservations", "users"
end
