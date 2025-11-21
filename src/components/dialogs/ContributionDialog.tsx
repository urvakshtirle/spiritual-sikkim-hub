import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContributionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contributionType: "photo" | "story" | "manuscript";
}

export function ContributionDialog({ open, onOpenChange, contributionType }: ContributionDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [contributorName, setContributorName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const typeLabels = {
    photo: "Photo",
    story: "Oral History",
    manuscript: "Manuscript"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Contribution Submitted! 🙏",
      description: `Thank you for sharing your ${typeLabels[contributionType].toLowerCase()}. Our team will review it and add it to the community archives.`,
    });
    
    // Reset form
    setTitle("");
    setDescription("");
    setLocation("");
    setContributorName("");
    setEmail("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Share {typeLabels[contributionType]}</DialogTitle>
          <DialogDescription>
            Help preserve Sikkim's monastery heritage for future generations
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder={`Enter ${typeLabels[contributionType].toLowerCase()} title`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide details about this contribution..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Related Monastery</Label>
            <Input
              id="location"
              placeholder="Which monastery is this related to?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          {contributionType === "photo" && (
            <div className="space-y-2">
              <Label htmlFor="file">Upload Photo</Label>
              <Input
                id="file"
                type="file"
                accept="image/*"
                required
              />
            </div>
          )}

          {contributionType === "manuscript" && (
            <div className="space-y-2">
              <Label htmlFor="file">Upload Manuscript</Label>
              <Input
                id="file"
                type="file"
                accept="image/*,.pdf"
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="contributorName">Your Name</Label>
            <Input
              id="contributorName"
              placeholder="Enter your name"
              value={contributorName}
              onChange={(e) => setContributorName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-monastery-red to-primary">
              Submit Contribution
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
