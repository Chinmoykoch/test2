"use client";
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  LifeAtInframeSection, 
  StudentService, 
  SportsFacility, 
  GalleryImage,
  apiHelpers,
  API_ENDPOINTS 
} from '@/utils/api';

const LifeAtInframeManagement = () => {
  const [sections, setSections] = useState<LifeAtInframeSection[]>([]);
  const [services, setServices] = useState<StudentService[]>([]);
  const [facilities, setFacilities] = useState<SportsFacility[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [sectionForm, setSectionForm] = useState({
    sectionType: 'hero',
    title: '',
    description: '',
    content: '',
    order: 1,
    isActive: true
  });

  const [serviceForm, setServiceForm] = useState({
    title: '',
    description: '',
    icon: '',
    order: 1
  });

  const [facilityForm, setFacilityForm] = useState({
    name: '',
    description: '',
    image: '',
    category: ''
  });

  const [galleryForm, setGalleryForm] = useState({
    title: '',
    imageUrl: '',
    category: '',
    order: 1
  });

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [sectionsData, servicesData, facilitiesData, galleryData] = await Promise.all([
        apiHelpers.getLifeAtInframeSections(),
        apiHelpers.getStudentServices(),
        apiHelpers.getSportsFacilities(),
        apiHelpers.getLifeAtInframeGalleryImages()
      ]);

      setSections(sectionsData);
      setServices(servicesData);
      setFacilities(facilitiesData);
      setGalleryImages(galleryData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch data');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSectionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_ENDPOINTS.ADD_LIFE_AT_INFRAME_SECTION}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sectionForm)
      });
      
      if (response.ok) {
        await fetchAllData();
        setSectionForm({
          sectionType: 'hero',
          title: '',
          description: '',
          content: '',
          order: 1,
          isActive: true
        });
      }
    } catch (error) {
      console.error('Error adding section:', error);
    }
  };

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_ENDPOINTS.ADD_STUDENT_SERVICE}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceForm)
      });
      
      if (response.ok) {
        await fetchAllData();
        setServiceForm({
          title: '',
          description: '',
          icon: '',
          order: 1
        });
      }
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  const handleFacilitySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_ENDPOINTS.ADD_SPORTS_FACILITY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(facilityForm)
      });
      
      if (response.ok) {
        await fetchAllData();
        setFacilityForm({
          name: '',
          description: '',
          image: '',
          category: ''
        });
      }
    } catch (error) {
      console.error('Error adding facility:', error);
    }
  };

  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_ENDPOINTS.ADD_LIFE_AT_INFRAME_GALLERY_IMAGE}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(galleryForm)
      });
      
      if (response.ok) {
        await fetchAllData();
        setGalleryForm({
          title: '',
          imageUrl: '',
          category: '',
          order: 1
        });
      }
    } catch (error) {
      console.error('Error adding gallery image:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Life at Inframe Management</h1>
      
      <Tabs defaultValue="sections" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="sections">Sections</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="facilities">Sports Facilities</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="sections" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Section</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSectionSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={sectionForm.sectionType}
                    onChange={(e) => setSectionForm({...sectionForm, sectionType: e.target.value as 'hero' | 'welcome' | 'services' | 'clubs' | 'sports' | 'events' | 'gallery' | 'tour'})}
                    className="border rounded p-2"
                  >
                    <option value="hero">Hero</option>
                    <option value="welcome">Welcome</option>
                    <option value="services">Services</option>
                    <option value="clubs">Clubs</option>
                    <option value="sports">Sports</option>
                    <option value="events">Events</option>
                    <option value="gallery">Gallery</option>
                    <option value="tour">Tour</option>
                  </select>
                  <Input
                    placeholder="Order"
                    type="number"
                    value={sectionForm.order}
                    onChange={(e) => setSectionForm({...sectionForm, order: parseInt(e.target.value)})}
                  />
                </div>
                <Input
                  placeholder="Title"
                  value={sectionForm.title}
                  onChange={(e) => setSectionForm({...sectionForm, title: e.target.value})}
                />
                <Input
                  placeholder="Description"
                  value={sectionForm.description}
                  onChange={(e) => setSectionForm({...sectionForm, description: e.target.value})}
                />
                <Textarea
                  placeholder="Content (HTML)"
                  value={sectionForm.content}
                  onChange={(e) => setSectionForm({...sectionForm, content: e.target.value})}
                />
                <Button type="submit">Add Section</Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {sections.map((section) => (
              <Card key={section._id}>
                <CardContent className="p-4">
                  <h3 className="font-bold">{section.title}</h3>
                  <p className="text-sm text-gray-600">Type: {section.sectionType}</p>
                  <p className="text-sm text-gray-600">Order: {section.order}</p>
                  <p className="text-sm text-gray-600">Active: {section.isActive ? 'Yes' : 'No'}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Service</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleServiceSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Title"
                    value={serviceForm.title}
                    onChange={(e) => setServiceForm({...serviceForm, title: e.target.value})}
                  />
                  <Input
                    placeholder="Order"
                    type="number"
                    value={serviceForm.order}
                    onChange={(e) => setServiceForm({...serviceForm, order: parseInt(e.target.value)})}
                  />
                </div>
                <Textarea
                  placeholder="Description"
                  value={serviceForm.description}
                  onChange={(e) => setServiceForm({...serviceForm, description: e.target.value})}
                />
                <Input
                  placeholder="Icon"
                  value={serviceForm.icon}
                  onChange={(e) => setServiceForm({...serviceForm, icon: e.target.value})}
                />
                <Button type="submit">Add Service</Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {services.map((service) => (
              <Card key={service._id}>
                <CardContent className="p-4">
                  <h3 className="font-bold">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <p className="text-sm text-gray-600">Order: {service.order}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="facilities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Sports Facility</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFacilitySubmit} className="space-y-4">
                <Input
                  placeholder="Name"
                  value={facilityForm.name}
                  onChange={(e) => setFacilityForm({...facilityForm, name: e.target.value})}
                />
                <Input
                  placeholder="Category"
                  value={facilityForm.category}
                  onChange={(e) => setFacilityForm({...facilityForm, category: e.target.value})}
                />
                <Input
                  placeholder="Image URL"
                  value={facilityForm.image}
                  onChange={(e) => setFacilityForm({...facilityForm, image: e.target.value})}
                />
                <Textarea
                  placeholder="Description"
                  value={facilityForm.description}
                  onChange={(e) => setFacilityForm({...facilityForm, description: e.target.value})}
                />
                <Button type="submit">Add Facility</Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {facilities.map((facility) => (
              <Card key={facility._id}>
                <CardContent className="p-4">
                  <h3 className="font-bold">{facility.name}</h3>
                  <p className="text-sm text-gray-600">{facility.description}</p>
                  <p className="text-sm text-gray-600">Category: {facility.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="gallery" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Gallery Image</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGallerySubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Title"
                    value={galleryForm.title}
                    onChange={(e) => setGalleryForm({...galleryForm, title: e.target.value})}
                  />
                  <Input
                    placeholder="Order"
                    type="number"
                    value={galleryForm.order}
                    onChange={(e) => setGalleryForm({...galleryForm, order: parseInt(e.target.value)})}
                  />
                </div>
                <Input
                  placeholder="Image URL"
                  value={galleryForm.imageUrl}
                  onChange={(e) => setGalleryForm({...galleryForm, imageUrl: e.target.value})}
                />
                <Input
                  placeholder="Category"
                  value={galleryForm.category}
                  onChange={(e) => setGalleryForm({...galleryForm, category: e.target.value})}
                />
                <Button type="submit">Add Gallery Image</Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {galleryImages.map((image) => (
              <Card key={image._id}>
                <CardContent className="p-4">
                  <h3 className="font-bold">{image.title}</h3>
                  <p className="text-sm text-gray-600">Category: {image.category}</p>
                  <p className="text-sm text-gray-600">Order: {image.order}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LifeAtInframeManagement; 