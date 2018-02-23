class TeamTable < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :teamName
      t.integer :amount
      t.boolean :status
    end
  end
end
