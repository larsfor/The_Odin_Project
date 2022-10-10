require "application_system_test_case"

class ProjectformsTest < ApplicationSystemTestCase
  setup do
    @projectform = projectforms(:one)
  end

  test "visiting the index" do
    visit projectforms_url
    assert_selector "h1", text: "Projectforms"
  end

  test "should create projectform" do
    visit projectforms_url
    click_on "New projectform"

    click_on "Create Projectform"

    assert_text "Projectform was successfully created"
    click_on "Back"
  end

  test "should update Projectform" do
    visit projectform_url(@projectform)
    click_on "Edit this projectform", match: :first

    click_on "Update Projectform"

    assert_text "Projectform was successfully updated"
    click_on "Back"
  end

  test "should destroy Projectform" do
    visit projectform_url(@projectform)
    click_on "Destroy this projectform", match: :first

    assert_text "Projectform was successfully destroyed"
  end
end
