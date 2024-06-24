"use client";

import { useAuth } from "@clerk/nextjs";
import * as Sentry from "@sentry/nextjs";
import { useEffect, useState } from "react";

function createWidget() {
  return Sentry.getFeedback()?.createWidget();
}

export default function SentryFeedbackWidget() {
  const auth = useAuth();
  const [widget, setWidget] = useState<ReturnType<typeof createWidget> | null>(
    null,
  );

  useEffect(() => {
    // Mount if signed in
    if (auth?.isSignedIn && !widget) {
      const newWidget = createWidget();
      setWidget(newWidget);
    }

    // Unmount if signed out
    if (!auth?.isSignedIn && widget) {
      console.log("removing from dom", widget);
      widget.removeFromDom();
      setWidget(null);
    }
  }, [auth, widget]);

  return null;
}
