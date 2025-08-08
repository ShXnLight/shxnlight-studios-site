import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Music, Instagram, Youtube, PlayCircle } from "lucide-react";
import { motion, type HTMLMotionProps } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const MotionH1 = (props: HTMLMotionProps<"h1"> & React.HTMLAttributes<HTMLHeadingElement>) => (
  <motion.h1 {...props} />
);

const MotionP = (props: HTMLMotionProps<"p"> & React.HTMLAttributes<HTMLParagraphElement>) => (
  <motion.p {...props} />
);

const MotionDiv = (props: HTMLMotionProps<"div"> & React.HTMLAttributes<HTMLDivElement>) => (
  <motion.div {...props} />
);

export default function SHXNlightStudios() {
  const tagRef = useRef<HTMLAudioElement | null>(null);

  const playTag = () => {
    if (tagRef.current) {
      tagRef.current.currentTime = 0;
      tagRef.current.play();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          autoPlay
          playsInline
          muted
          loop
          poster="/hero-poster.jpg"
        >
          <source src="/video/club-vibe.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 drop-shadow-[0_0_25px_rgba(255,0,255,0.25)]"
          >
            SHXNlight Studios
          </MotionH1>

          <MotionP
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-4 text-xl md:text-2xl text-zinc-200"
          >
            Illuminate Your Sound
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button onClick={playTag} className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
              <PlayCircle className="h-5 w-5" />
              Play Tag — “SHXNlight Studios… Illuminate”
            </Button>
            <a href="#featured" className="inline-flex">
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                <Music className="h-5 w-5 mr-2" /> Listen Now
              </Button>
            </a>
            <a href="#booking" className="inline-flex">
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                Book a Session
              </Button>
            </a>
          </MotionDiv>

          <audio ref={tagRef} src="/audio/shxnlight-tag.mp3" preload="auto" />
        </div>

        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl bg-fuchsia-500/20" />
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full blur-3xl bg-cyan-500/10" />
        </div>
      </section>

     {/* FEATURED */}
<section
  id="featured"
  className="px-6 py-16 md:py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black"
>
  <div className="mx-auto max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Drops</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Track 1 */}
      <Card className="bg-zinc-900/70 border-zinc-800 hover:bg-zinc-900 transition">
        <CardContent className="p-4 space-y-3">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <Image
              src="/images/covers/boy-i-see-you-watching.png"
              alt="Boy, I See You Watching"
              fill
              className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Boy, I See You Watching</span>
            <audio controls className="w-28">
              <source src="/audio/boy-i-see-you-watching.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </CardContent>
      </Card>

      {/* Track 2 */}
      <Card className="bg-zinc-900/70 border-zinc-800 hover:bg-zinc-900 transition">
        <CardContent className="p-4 space-y-3">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <Image
              src="/images/covers/with-my-hands.png"
              alt="With My Hands"
              fill
              className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">With My Hands</span>
            <audio controls className="w-28">
              <source src="/audio/with-my-hands.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </CardContent>
      </Card>

      {/* Track 3 */}
      <Card className="bg-zinc-900/70 border-zinc-800 hover:bg-zinc-900 transition">
        <CardContent className="p-4 space-y-3">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <Image
              src="/images/covers/cocoa-skies.png"
              alt="Cocoa Skies"
              fill
              className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Cocoa Skies</span>
            <audio controls className="w-28">
              <source src="/audio/cocoa-skies.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


      {/* BOOKING */}
      <section id="booking" className="px-6 py-16 md:py-24 bg-black/90">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">Book a Session</h3>
              <Input placeholder="Your Name" className="bg-zinc-950 border-zinc-800" />
              <Input placeholder="Email Address" type="email" className="bg-zinc-950 border-zinc-800" />
              <Textarea placeholder="What do you need? (Production, Mixing, Mastering)" className="bg-zinc-950 border-zinc-800" />
              <a href="mailto:music@shxnlightstudios.com?subject=Booking%20Request%20-%20SHXNlight%20Studios">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 border-none">Request Booking</Button>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">Connect</h3>
              <div className="space-y-3">
                <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/5M9GQw3e65ZA4EiAXeEtXT?si=QgnhWdfgRwm4irZAHz-Mug" className="inline-flex w-full">
                  <Button className="w-full justify-start border-zinc-700 text-white hover:bg-zinc-800">
                    <Music className="mr-2" /> Spotify
                  </Button>
                </a>
                <a target="_blank" rel="noreferrer" href="https://youtube.com/@shxnlightstudios?si=8qubAg2iS_TojdS0" className="inline-flex w-full">
                  <Button className="w-full justify-start border-zinc-700 text-white hover:bg-zinc-800">
                    <Youtube className="mr-2" /> YouTube
                  </Button>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/shxnlightstudios" className="inline-flex w-full">
                  <Button className="w-full justify-start border-zinc-700 text-white hover:bg-zinc-800">
                    <Instagram className="mr-2" /> Instagram
                  </Button>
                </a>
                <Button className="w-full justify-start border-zinc-700 text-white hover:bg-zinc-800">
                  <Mail className="mr-2" /> music@shxnlightstudios.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="text-center text-zinc-500 text-sm py-10">
        &copy; {new Date().getFullYear()} SHXNlight Studios LLC. Illuminate.
      </footer>
    </div>
  );
}