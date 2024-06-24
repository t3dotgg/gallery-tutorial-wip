"use client";

import { useAuth } from "@clerk/nextjs";
import { feedbackIntegration } from "@sentry/nextjs";
import { useEffect, useState } from "react";

function createWidget() {
  const widget = feedbackIntegration({
    // Disable injecting the default widget
    autoInject: false,
  }).createWidget();
  return widget;
}

export default function SentryFeedbackWidget() {
  const auth = useAuth();
  const [widget, setWidget] = useState<any>(null);

  useEffect(() => {
    if (auth?.isSignedIn && !widget) {
      const newWidget = createWidget();
      setWidget(newWidget);
      setTimeout(() => {
        newWidget.appendToDom();
      }, 1000);
    }

    if (!auth?.isSignedIn && widget) {
      console.log("removing from dom", widget);
      widget.removeFromDom();
      setWidget(null);
    }
  }, [auth, widget]);

  return <div />;
}
