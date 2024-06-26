import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  const imageStyle = {
    borderRadius: '50%'
  }
   
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image
          src="/spooky.svg"
          alt="Gamehub"
          height="70"
          width="70"
          style={imageStyle}
        />
      </div>
      <div className={cn(
        "flex flex-col items-center",
        font.className,
      )}>
        <p className="text-xl font-semibold">
          RTSP
        </p>
        <p className="text-sm text-muted-foreground">
          Let&apos;s Stream
        </p>
      </div>
    </div>
  );
};
