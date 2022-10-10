require "test_helper"

class ProjectformsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @projectform = projectforms(:one)
  end

  test "should get index" do
    get projectforms_url
    assert_response :success
  end

  test "should get new" do
    get new_projectform_url
    assert_response :success
  end

  test "should create projectform" do
    assert_difference("Projectform.count") do
      post projectforms_url, params: { projectform: {  } }
    end

    assert_redirected_to projectform_url(Projectform.last)
  end

  test "should show projectform" do
    get projectform_url(@projectform)
    assert_response :success
  end

  test "should get edit" do
    get edit_projectform_url(@projectform)
    assert_response :success
  end

  test "should update projectform" do
    patch projectform_url(@projectform), params: { projectform: {  } }
    assert_redirected_to projectform_url(@projectform)
  end

  test "should destroy projectform" do
    assert_difference("Projectform.count", -1) do
      delete projectform_url(@projectform)
    end

    assert_redirected_to projectforms_url
  end
end
