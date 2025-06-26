"use client";
import React, { useState } from "react";
import { useAdvisors, Advisor } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FaEdit, FaTrash, FaPlus, FaEye } from "react-icons/fa";
import Image from "next/image";

const AdvisorManagement = () => {
  const { advisors, loading, error, createAdvisor, updateAdvisor, deleteAdvisor } = useAdvisors();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingAdvisor, setEditingAdvisor] = useState<Advisor | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    description: "",
    image: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingAdvisor) {
        await updateAdvisor(editingAdvisor._id, formData);
      } else {
        await createAdvisor(formData);
      }
      
      setFormData({ name: "", role: "", description: "", image: "" });
      setEditingAdvisor(null);
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error saving advisor:', error);
    }
  };

  const handleEdit = (advisor: Advisor) => {
    setEditingAdvisor(advisor);
    setFormData({
      name: advisor.name,
      role: advisor.role,
      description: advisor.description,
      image: advisor.image,
    });
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this advisor?')) {
      await deleteAdvisor(id);
    }
  };

  const handleAddNew = () => {
    setEditingAdvisor(null);
    setFormData({ name: "", role: "", description: "", image: "" });
    setIsFormOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Advisor Management</h1>
        <Button onClick={handleAddNew} className="bg-amber-500 hover:bg-amber-600">
          <FaPlus className="mr-2" />
          Add New Advisor
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advisors.map((advisor) => (
          <Card key={advisor._id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={advisor.image}
                alt={advisor.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{advisor.name}</h3>
              <p className="text-sm text-gray-600 mb-3 font-medium">{advisor.role}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{advisor.description}</p>
              
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="flex-1">
                      <FaEye className="mr-1" />
                      View
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Advisor Details</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="relative h-64">
                        <Image
                          src={advisor.image}
                          alt={advisor.name}
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{advisor.name}</h3>
                        <p className="text-lg text-gray-600 mb-4 font-medium">{advisor.role}</p>
                        <p className="text-gray-700 leading-relaxed">{advisor.description}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(advisor)}
                  className="flex-1"
                >
                  <FaEdit className="mr-1" />
                  Edit
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(advisor._id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <FaTrash className="mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add/Edit Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingAdvisor ? 'Edit Advisor' : 'Add New Advisor'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                minLength={2}
                maxLength={100}
                placeholder="Enter advisor name"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role *
              </label>
              <Input
                id="role"
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                required
                minLength={2}
                maxLength={100}
                placeholder="Enter advisor role"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                minLength={2}
                maxLength={2000}
                rows={4}
                placeholder="Enter advisor description"
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL *
              </label>
              <Input
                id="image"
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                required
                placeholder="Enter image URL"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-amber-500 hover:bg-amber-600">
                {editingAdvisor ? 'Update Advisor' : 'Add Advisor'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsFormOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdvisorManagement; 