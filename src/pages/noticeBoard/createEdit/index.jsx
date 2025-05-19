import { Button, Step, StepButton, Stepper } from "@mui/material";
import { BreadCrumbCustom } from "../../../components/ui/breadCrumb";
import { ButtonCustom } from "../../../components/ui/button";
import { FormWrapper } from "../../../components/ui/wrapper/form";
import { PageHeaderWrapper } from "../../../components/ui/wrapper/pageHeader";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function NoticeBoardCreateEdit() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const navigate = useNavigate();

  const steps = [
    "Basic Notice Detail",
    "Notice Content",
    "Notifications & Permissions",
    "Preview",
  ];

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    if (step == 0) {
      navigate("/forum/notice-board/create/");
    } else if (step == 1) {
      navigate("notice-content");
    } else if (step == 2) {
      navigate("notifications-and-permissions");
    } else if (step == 3) {
      navigate("/forum/notice-board/preview");
    }
  };

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <>
      <PageHeaderWrapper>
        <BreadCrumbCustom
          links={[
            { label: "Home", to: "/" },
            { label: "Forum", to: "/forum" },
            { label: "Notice Board", to: "/forum/notice-board" },
          ]}
          pageTitle="Create Noticeboard"
        />
        <ButtonCustom to="edit" color="primary" variant="contained">
          Edit
        </ButtonCustom>
      </PageHeaderWrapper>

      <FormWrapper className="flex flex-col gap-8">
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <Outlet />
        <div className="flex justify-end gap-2">
          <Button variant="outlined">Save as draft</Button>
          <Button variant="contained">Next</Button>
        </div>
      </FormWrapper>
    </>
  );
}
