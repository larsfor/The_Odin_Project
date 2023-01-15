require "test_helper"

class PopupsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get popups_index_url
    assert_response :success
  end
end
