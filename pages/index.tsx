import { TestComponent } from "components/Test";
import NextSvg from "public/thirteen.svg";

export default function Home() {
    return (
        <div>
            <NextSvg />
            <TestComponent />
            <button className="border p-3">Submit</button>
        </div>
    );
}
