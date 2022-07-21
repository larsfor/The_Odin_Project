require "test_helper"

class StimulusExercisesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get stimulus_exercises_index_url
    assert_response :success
  end
end
