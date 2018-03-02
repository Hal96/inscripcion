class TeamsController < ApplicationController
  def index
    @teams = Team.where.not("teamName = 'Sin Asignar'")
  end

  def show
    @team = Team.find(params[:id])
    @members = @team.students
  end

  private
  def update_student
    puts "HOLAAAAAAAAAAAAAAAAA"
    @student = Student.find_by(params[:id])
    @student.update(team: nil)
    redirect_to team_path
  end

end
