import CustomButton from "@/components/CustomButton";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-2">
      HomePage
      <Button variant="default" size="xl" className="rounded-full">
        <CirclePlus />
        Click Me
      </Button>
      {/* <CustomButton disabled={true} isRounded={false} /> */}
    </div>
  );
}
