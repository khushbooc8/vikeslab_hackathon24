import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContributeForm() {
    return (
        <div className="space-y-6 w-full">
            <Card>
                <CardHeader>
                    <CardTitle>Contribute a Link</CardTitle>
                    <CardDescription>Share a helpful resource with the class.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                placeholder="Enter the link title"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="url">URL</Label>
                            <Input
                                id="url"
                                placeholder="Enter the link URL"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Comment</Label>
                            <Textarea
                                id="comment"
                                placeholder="Describe the link"
                                rows={3}
                            />
                        </div>
                        <Button
                            className="w-full"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
