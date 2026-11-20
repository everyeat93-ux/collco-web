export type AnalyticsEventName =
  | "featured_project_click"
  | "project_detail_outbound_click"
  | "studio_page_navigate"
  | "contact_email_draft_click"
  | "contact_email_copy";

export interface AnalyticsPayload {
  projectId?: string;
  destinationType?: "detail" | "web" | "google_play" | "studio" | "mailto" | "copy_email";
  location: string;
}

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, string>) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * 개인정보(이메일 주소, 문의 내용 등)는 절대 전송하지 않습니다.
 * mailto 클릭은 '초안 열기' 이벤트로만 기록하며 실제 문의 수신으로 집계하지 않습니다.
 */
export function trackEvent(eventName: AnalyticsEventName, payload: AnalyticsPayload) {
  if (typeof window === "undefined") return;

  const safeParams: Record<string, string> = {
    location: payload.location,
  };
  if (payload.projectId) safeParams.project_id = payload.projectId;
  if (payload.destinationType) safeParams.destination_type = payload.destinationType;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, safeParams);
    return;
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...safeParams,
    });
  }
}
