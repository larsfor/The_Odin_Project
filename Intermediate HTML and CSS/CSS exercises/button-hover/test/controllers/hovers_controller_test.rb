require "test_helper"

class HoversControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hovers_index_url
    assert_response :success
  end
end
