import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Samaan Suites – Luxury Serviced Hotel in Mogadishu, Somalia | 60 Suites, Conference Venue, Restaurant, Gym | Opening Soon";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(145deg, #0b1120 0%, #162040 50%, #1e2d54 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "8px",
            }}
          >
            <div style={{ width: 48, height: 1, background: "rgba(201,168,76,0.5)" }} />
            <div
              style={{
                width: 10,
                height: 10,
                background: "#c9a84c",
                transform: "rotate(45deg)",
              }}
            />
            <div style={{ width: 48, height: 1, background: "rgba(201,168,76,0.5)" }} />
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#f0ead6",
              letterSpacing: "6px",
              lineHeight: 1,
            }}
          >
            SAMAAN
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 300,
              color: "#c9a84c",
              letterSpacing: "14px",
              marginTop: "4px",
            }}
          >
            S U I T E S
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "40px",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "100px",
            padding: "10px 28px",
            background: "rgba(201,168,76,0.06)",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#c9a84c",
            }}
          />
          <span
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#c9a84c",
              letterSpacing: "3px",
            }}
          >
            OPENING SOON
          </span>
        </div>

        <div
          style={{
            fontSize: 18,
            color: "rgba(240,234,214,0.55)",
            marginTop: "32px",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.6,
          }}
        >
          Luxury Serviced Hotel &bull; 60 Suites &bull; Mogadishu Airport Area, Somalia
        </div>

        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "36px",
          }}
        >
          {["Restaurant", "Conference Venue", "Gym", "Masjid", "24/7 Security"].map(
            (item) => (
              <span
                key={item}
                style={{
                  fontSize: 13,
                  color: "rgba(201,168,76,0.7)",
                  letterSpacing: "1px",
                }}
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
