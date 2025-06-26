"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Image as ImageIcon,
  FileText,
  BarChart3,
  Heart,
  Camera
} from 'lucide-react';
import { 
  AboutUsHeroImage, 
  AboutUsStatistic, 
  AboutUsCoreValue, 
  AboutUsCampusImage, 
  AboutUsContent,
  apiHelpers,
  API_ENDPOINTS,
  apiClient,
  useAboutUsData
} from '../utils/api';

const AboutUsManagement: React.FC = () => {
  const {
    heroImages,
    statistics,
    coreValues,
    campusImages,
    whoWeAre,
    aboutUs,
    vision,
    mission,
    coreValuesText,
    loading,
    error,
    refetch
  } = useAboutUsData();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
        <span className="ml-2">Loading About Us data...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">Error: {error}</p>
          <Button onClick={refetch} className="mt-2">Retry</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">About Us Management</h1>
        <p className="text-gray-600">View and manage About Us page content</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hero Images */}
        <Card>
          <CardHeader>
            <CardTitle>Hero Gallery ({heroImages.length} images)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {heroImages.map((image, index) => (
                <div key={image._id || index} className="flex items-center gap-3 p-3 border rounded">
                  <img src={image.imageUrl} alt={image.altText} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-medium">{image.altText}</p>
                    <p className="text-sm text-gray-500">Order: {image.order}</p>
                  </div>
                  <Badge variant="secondary">#{index + 1}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Statistics ({statistics.length} items)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {statistics.map((stat, index) => (
                <div key={stat._id || index} className="p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-yellow-600">{stat.number}</div>
                    <div className="flex-1">
                      <h3 className="font-medium">{stat.title}</h3>
                      <p className="text-sm text-gray-600">{stat.description}</p>
                    </div>
                    <Badge variant="secondary">#{index + 1}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Core Values */}
        <Card>
          <CardHeader>
            <CardTitle>Core Values ({coreValues.length} items)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {coreValues.map((value, index) => (
                <div key={value._id || index} className="p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <img src={value.imageUrl} alt={value.title} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-medium text-yellow-600">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                    <Badge variant="secondary">#{index + 1}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Campus Images */}
        <Card>
          <CardHeader>
            <CardTitle>Campus Gallery ({campusImages.length} images)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {campusImages.map((image, index) => (
                <div key={image._id || index} className="flex items-center gap-3 p-3 border rounded">
                  <img src={image.imageUrl} alt={image.altText} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-medium">{image.altText}</p>
                    <p className="text-sm text-gray-500">Order: {image.order}</p>
                  </div>
                  <Badge variant="secondary">#{index + 1}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Content Sections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whoWeAre && (
                <div className="p-4 border rounded">
                  <Badge variant="default" className="mb-2">Who We Are</Badge>
                  <h3 className="font-medium mb-2">{whoWeAre.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{whoWeAre.content}</p>
                  {whoWeAre.isActive ? (
                    <Badge variant="default" className="mt-2">Active</Badge>
                  ) : (
                    <Badge variant="secondary" className="mt-2">Inactive</Badge>
                  )}
                </div>
              )}

              {aboutUs && (
                <div className="p-4 border rounded">
                  <Badge variant="default" className="mb-2">About Us</Badge>
                  <h3 className="font-medium mb-2">{aboutUs.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{aboutUs.content}</p>
                  {aboutUs.isActive ? (
                    <Badge variant="default" className="mt-2">Active</Badge>
                  ) : (
                    <Badge variant="secondary" className="mt-2">Inactive</Badge>
                  )}
                </div>
              )}

              {vision && (
                <div className="p-4 border rounded">
                  <Badge variant="default" className="mb-2">Vision</Badge>
                  <h3 className="font-medium mb-2">{vision.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{vision.content}</p>
                  {vision.isActive ? (
                    <Badge variant="default" className="mt-2">Active</Badge>
                  ) : (
                    <Badge variant="secondary" className="mt-2">Inactive</Badge>
                  )}
                </div>
              )}

              {mission && (
                <div className="p-4 border rounded">
                  <Badge variant="default" className="mb-2">Mission</Badge>
                  <h3 className="font-medium mb-2">{mission.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{mission.content}</p>
                  {mission.isActive ? (
                    <Badge variant="default" className="mt-2">Active</Badge>
                  ) : (
                    <Badge variant="secondary" className="mt-2">Inactive</Badge>
                  )}
                </div>
              )}

              {coreValuesText && (
                <div className="p-4 border rounded">
                  <Badge variant="default" className="mb-2">Core Values Text</Badge>
                  <h3 className="font-medium mb-2">{coreValuesText.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{coreValuesText.content}</p>
                  {coreValuesText.isActive ? (
                    <Badge variant="default" className="mt-2">Active</Badge>
                  ) : (
                    <Badge variant="secondary" className="mt-2">Inactive</Badge>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">About Us API Integration Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="font-medium">Hero Images:</span>
            <Badge variant={heroImages.length > 0 ? "default" : "secondary"} className="ml-2">
              {heroImages.length} loaded
            </Badge>
          </div>
          <div>
            <span className="font-medium">Statistics:</span>
            <Badge variant={statistics.length > 0 ? "default" : "secondary"} className="ml-2">
              {statistics.length} loaded
            </Badge>
          </div>
          <div>
            <span className="font-medium">Core Values:</span>
            <Badge variant={coreValues.length > 0 ? "default" : "secondary"} className="ml-2">
              {coreValues.length} loaded
            </Badge>
          </div>
          <div>
            <span className="font-medium">Campus Images:</span>
            <Badge variant={campusImages.length > 0 ? "default" : "secondary"} className="ml-2">
              {campusImages.length} loaded
            </Badge>
          </div>
        </div>
        <p className="text-blue-700 mt-3 text-sm">
          The About Us page is now fully integrated with the backend API. All content is dynamically loaded from the database.
        </p>
      </div>
    </div>
  );
};

export default AboutUsManagement; 