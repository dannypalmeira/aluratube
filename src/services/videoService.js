import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://mxgahctuxruczllpjbrm.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14Z2FoY3R1eHJ1Y3psbHBqYnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0MjMzMDEsImV4cCI6MTk4Mzk5OTMwMX0.cWCJaXn5yhpkwyaLyXIp6GHoru182A01aVRZhfQ72x4";
const _supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService () {
    return {
        getAllVideos () {
          return _supabase.from("video")
            .select("*")
            }
    }
}