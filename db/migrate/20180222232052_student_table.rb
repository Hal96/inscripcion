class StudentTable < ActiveRecord::Migration[5.1]
  def change
    create_table :students do |t|
      t.belongs_to :team, index: true
      t.string :name
      t.string :student_id
    end
  end
end
