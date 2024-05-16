import { formData } from "@/lib/action";
import Link from "next/link";
export default function Home() {
  return (
<section className="main-section">
  <div>
    Upload files using app write
  </div>

  <div>
    <form action={formData}>
    <input type="file" name="file" id="file" placeholder="upload files"/>
    <button>Upload files</button>
    </form>
    <Link href="/imageshow">Show images</Link>
  </div>



</section>   
  );
}
