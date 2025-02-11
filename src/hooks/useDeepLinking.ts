import { useEffect } from "react";
import * as Linking from 'expo-linking';

const useDeepLinking= () => {
  const prefix = Linking.createURL("/");
  const linking = {
    prefixes: [prefix, "acastudy_ts_app"],
    config: {
      screens: {
        OnboardingScreen: {
          path: "web/onboarding",
        },
        PrivacyPolicyScreen: {
          path: "web/privacypolicy",
        },
        TermsOfUseScreen: {
          path: "web/termsofuse",
        },
        HomeScreen: {
          path: "web/home",
        },
        CallScreen: {
          path: "web/meeting-room",
        },
        ChatScreen: {
          path: "web/chat",
        },
        StudentProfileScreen: {
          path: "web/student-profile",
        },
        StudyScreen: {
          path: "web/study",
        },
        TutorProfileScreen: {
          path: "web/tutor-profile",
        },
        RequestTutorScreen: {
          path: "web/request-tutor"
        }
      },
    },
  };

  useEffect(() => {
    const handleDeepLink = (event: any) => {
      const data = Linking.parse(event.url);
    };

    const subscription = Linking.addEventListener("url", handleDeepLink);
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink({ url });
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return linking;
};

export default useDeepLinking;
