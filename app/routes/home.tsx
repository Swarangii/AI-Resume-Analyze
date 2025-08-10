import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import {resumes} from "../../constants";
import {ResumeCard} from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dreams!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();
  // const [resumes, setResumes] = useState<Resume[]>([]);
  // const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
  <Navbar/>
    <section className="main-section">
    <div className="page-heading py-7">
      <h1>Track Your Application & Resume Ratings</h1>
      <h2>Review your submission and check AI-powered feedback.</h2>

    </div>
      {resumes.length>0 && (
          <div className="resumes-section grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {resumes.map((resume)=>(
                <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
      )}
  </section>


  </main>
}
