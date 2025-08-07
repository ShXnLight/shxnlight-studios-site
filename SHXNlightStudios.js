
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Music, Instagram, Youtube } from "lucide-react";

export default function SHXNlightStudios() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white p-6 space-y-10 font-sans">
      <header className="text-center space-y-4 pt-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          SHXNlight Studios
        </h1>
        <p className="text-xl italic text-gray-400">Illuminate Your Sound</p>
      </header>

      <section className="text-center space-y-6 max-w-2xl mx-auto">
        <p className="text-xl text-zinc-300">
          🎧 Elevating sonic vision with precision-crafted production, mixing, and artistry. SHXNlight Studios is where sound finds soul.
        </p>
        <audio controls className="mx-auto rounded-md shadow-lg">
          <source src="/sample-track.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="bg-zinc-800 border-none shadow-xl">
          <CardContent className="p-6 space-y-5">
            <h2 className="text-3xl font-bold text-purple-400">Book a Session</h2>
            <Input placeholder="Your Name" className="bg-zinc-900 border-zinc-700" />
            <Input placeholder="Email Address" type="email" className="bg-zinc-900 border-zinc-700" />
            <Textarea
              placeholder="Tell us what you need: Mixing, Mastering, Vocal Production, etc."
              className="bg-zinc-900 border-zinc-700"
            />
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
              Request Booking
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 border-none shadow-xl">
          <CardContent className="p-6 space-y-5">
            <h2 className="text-3xl font-bold text-pink-400">Connect With Us</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-zinc-700 text-white hover:bg-zinc-700">
                <Music className="mr-2" />
                Spotify
              </Button>
              <Button variant="outline" className="w-full justify-start border-zinc-700 text-white hover:bg-zinc-700">
                <Youtube className="mr-2" />
                YouTube
              </Button>
              <Button variant="outline" className="w-full justify-start border-zinc-700 text-white hover:bg-zinc-700">
                <Instagram className="mr-2" />
                Instagram
              </Button>
              <Button variant="outline" className="w-full justify-start border-zinc-700 text-white hover:bg-zinc-700">
                <Mail className="mr-2" />
                shxnlightstudios@gmail.com
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-zinc-500 text-sm pt-16 pb-6">
        &copy; 2025 SHXNlight Studios LLC. Crafted with intention. All rights reserved.
      </footer>
    </div>
  );
}
