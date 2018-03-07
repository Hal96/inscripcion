class StudentsController < ApplicationController
  def index
    @team = Team.find_by(teamName: "Sin Asignar")
    @students = Student.where(team: @team)
  end

  def edit
    @student = Student.find(params[:id])
  end

  def update
    @student = Student.find(params[:id])

    if @student.update(student_params)
      redirect_to students_path
    end
  end

  private
    def student_params
      params.require(:student).permit(:name, :team_id)
    end

end


