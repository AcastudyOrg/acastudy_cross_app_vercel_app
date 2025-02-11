import React from "react";
import { View } from "react-native";

import { onboardingScreenStyles } from "../../styles/screensStyle/publicStyle/onboardingScreenStyle";
import subjectData from "../../../assets/data/home/subjectData.json";
import upcomingEventsData from "../../../assets/data/home/upcomingEventsData.json";

import { BecomeWhatAtAcaStudyComponent, BannerComponent, PublicScreenLayout } from "../../components";
import SubjectsSection from "../../components/sections/home/SubjectsSection";
import EventsSection from "../../components/sections/home/EventsSection";
import { STRING } from "../../constants/strings";
import { IMAGES } from "../../constants";
import useScreenWidth from "../../hooks/useScreenWidth";
import { isNotDesktop } from "../../../utils/config";

const OnboardingScreen = () => {
  const screenWidth = useScreenWidth();
  const isMobile = isNotDesktop(screenWidth);
  return (
    <PublicScreenLayout>
      <View style={onboardingScreenStyles.componentContainer}>
        <View style={{ paddingHorizontal: isMobile ? 0 : 15 }}>
          <BannerComponent />
        </View>

        <SubjectsSection subjectData={subjectData} />
        <EventsSection upcomingEventsData={upcomingEventsData} />
      </View>

      <View style={[
        onboardingScreenStyles.infoSectionContainer,
        { paddingHorizontal: isMobile ? 15 : 27, }
      ]}>
        <BecomeWhatAtAcaStudyComponent
          switchRow={false}
          image={IMAGES.student}
          title={STRING.OnbordingBecomeAStudentTittle}
          firstSubtitle={STRING.OnbordingBecomeAStudentFirstSubtitle}
          firstInfo={STRING.OnbordingBecomeAStudentFirstInfo}
          secondSubtitle={STRING.OnbordingBecomeAStudentSecondSubtitle}
          secondInfo={STRING.OnbordingBecomeAStudentSecondInfo}
          buttonText={STRING.OnbordingBecomeAStudentButtonText}
          onClick={() => console.log("sign up as a Student")}
        />

        <BecomeWhatAtAcaStudyComponent
          switchRow={true}
          image={IMAGES.studentTutor}
          title={STRING.OnbordingBecomeATutor}
          firstSubtitle={STRING.OnbordingBecomeATutorFirstSubtitle}
          firstInfo={STRING.OnbordingBecomeATutorFirstInfo}
          secondSubtitle={STRING.OnbordingBecomeATutorSecondSubtitle}
          secondInfo={STRING.OnbordingBecomeATutorSecondInfo}
          extraInfo={STRING.OnbordingBecomeATutorSecondInfoExtraInfo}
          buttonText={STRING.OnbordingBecomeATutorButtonText}
          onClick={() => console.log("sign up as a Tutor")}
        />
      </View>
    </PublicScreenLayout>
  );
};

export default OnboardingScreen;
