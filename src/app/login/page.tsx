import Card from "@/components/Cards";
import HomeButton from "@/components/HomeButton";
import Link from "next/link";


export default function Login() {
    return (
        <div>
            <div className="flex justify-center py-10">
                <Card variant="smCard" className="bg-red-500">
                    <div className="flex flex-col items-center justify-center h-5/6 ">
                        <div className="flex h-1/4  justify-start">
                            <span className="text-5xl">LOGIN</span>
                        </div>
                        <div className="flex flex-col gap-6">
                            <input type="text" placeholder="E-MAIL" />
                            <input type="text" placeholder="SENHA" />
                            <div className="flex w-full justify-start">
                                <Link href="/admin">Esqueci a senha?</Link>
                            </div>

                        </div>
                            <div className="flex  w-full items-center justify-center">
                                <button className="border p-2 mt-10 border-black rounded-xl w-2/5">Entrar</button>
                            </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}