class StudentsController < ApplicationController
  def index
    @team = Team.find_by(teamName: "Sin Asignar")
    @students = Student.where(team: @team)
  end

end


