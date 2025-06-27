"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "./ui/dialog";
import { apiHelpers, IndustryPartner } from "../utils/api";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Plus, Edit, Trash2, Loader2 } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const IndustryPartnerManagement: React.FC = () => {
  const [partners, setPartners] = useState<IndustryPartner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<IndustryPartner | null>(null);
  const [deletingPartner, setDeletingPartner] = useState<IndustryPartner | null>(null);
  const [formData, setFormData] = useState({ name: "", src: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch partners on component mount
  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      setLoading(true);
      setError(null);
      const partnersData = await apiHelpers.getIndustryPartners();
      setPartners(partnersData);
    } catch (err) {
      console.error('Failed to fetch industry partners:', err);
      setError('Failed to load industry partners. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setError('Company name is required');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      if (editingPartner) {
        // Update existing partner
        const updatedPartner = await apiHelpers.updateIndustryPartner(
          editingPartner._id,
          {
            name: formData.name.trim(),
            src: formData.src.trim() || undefined
          }
        );
        setPartners(prev => prev.map(p => p._id === editingPartner._id ? updatedPartner : p));
      } else {
        // Create new partner
        const newPartner = await apiHelpers.createIndustryPartner({
          name: formData.name.trim(),
          src: formData.src.trim() || undefined
        });
        setPartners(prev => [newPartner, ...prev]);
      }

      // Reset form and close dialog
      setFormData({ name: "", src: "" });
      setEditingPartner(null);
      setIsDialogOpen(false);
    } catch (err: unknown) {
      console.error('Failed to save partner:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to save partner. Please try again.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (partner: IndustryPartner) => {
    setEditingPartner(partner);
    setFormData({
      name: partner.name,
      src: partner.src || ""
    });
    setIsDialogOpen(true);
  };

  const handleDeleteClick = (partner: IndustryPartner) => {
    setDeletingPartner(partner);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deletingPartner) return;

    try {
      setError(null);
      await apiHelpers.deleteIndustryPartner(deletingPartner._id);
      setPartners(prev => prev.filter(p => p._id !== deletingPartner._id));
      setIsDeleteDialogOpen(false);
      setDeletingPartner(null);
    } catch (err: unknown) {
      console.error('Failed to delete partner:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete partner. Please try again.';
      setError(errorMessage);
    }
  };

  const handleAddNew = () => {
    setEditingPartner(null);
    setFormData({ name: "", src: "" });
    setIsDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className={`text-3xl font-bold text-gray-800 ${poppins.className}`}>
          Industry Partners Management
        </h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddNew} className="bg-yellow-400 text-black hover:bg-yellow-500">
              <Plus className="w-4 h-4 mr-2" />
              Add Partner
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {editingPartner ? 'Edit Industry Partner' : 'Add New Industry Partner'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Company Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="src">Logo URL</Label>
                <Input
                  id="src"
                  type="url"
                  value={formData.src}
                  onChange={(e) => setFormData(prev => ({ ...prev, src: e.target.value }))}
                  placeholder="https://example.com/logo.png"
                />
              </div>
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    editingPartner ? 'Update' : 'Add'
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {partners.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-600">No industry partners found. Add your first partner to get started.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <Card key={partner._id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(partner)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDeleteClick(partner)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden bg-white">
                    <Image
                      src={partner.src || "/company logo/logo.png"}
                      alt={partner.name}
                      width={128}
                      height={128}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p><strong>ID:</strong> {partner._id}</p>
                  <p><strong>Created:</strong> {new Date(partner.createdAt || '').toLocaleDateString()}</p>
                  {partner.updatedAt && (
                    <p><strong>Updated:</strong> {new Date(partner.updatedAt).toLocaleDateString()}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Industry Partner</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-600">
              Are you sure you want to delete &ldquo;{deletingPartner?.name}&rdquo;? This action cannot be undone.
            </p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IndustryPartnerManagement; 