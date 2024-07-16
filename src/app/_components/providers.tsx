// app/providers.js
"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { env } from "~/env";

if (typeof window !== "undefined") {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: "/ingest",
  });
}

export function CSPostHogProvider(props: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{props.children}</PostHogProvider>;
}
